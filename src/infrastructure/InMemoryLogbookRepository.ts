import type { ILogbookRepository } from "../application/ILogbookRepository";
import type { Logbook } from "../domain/Logbook";

export class InMemoryLogbookRepository implements ILogbookRepository {
    private readonly _logbooks: Logbook[] = [];

    public async save(logbook: Logbook): Promise<boolean> {
        this._logbooks.push(logbook);

        return true;
    }
}
