import { Logbook } from "../domain/Logbook";
import type { ILogbookRepository } from "./ILogbookRepository";

interface ICreateLogbookDto {
    userId: string;
    name: string;
}

interface ICreateLogbookResult {
    logbookId: string;
}

export class CreateLogbookUseCase {
    public constructor(private readonly _logbookRepo: ILogbookRepository) {}

    public async execute(
        input: ICreateLogbookDto,
    ): Promise<ICreateLogbookResult> {
        const { name, userId } = input;

        const logbook = new Logbook(name, userId);

        const result = await this._logbookRepo.save(logbook);

        if (!result) {
            throw new Error("Could not save logbook");
        }

        return {
            logbookId: logbook.id,
        };
    }
}
