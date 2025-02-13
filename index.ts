import { CreateLogbookUseCase } from "./src/application/CreateLogbookUseCase";
import { InMemoryLogbookRepository } from "./src/infrastructure/InMemoryLogbookRepository";
import { ApiServer } from "./src/presentation/ApiServer"

export async function main(): Promise<void> {
    const inMemoryRepo = new InMemoryLogbookRepository();
    const useCase = new CreateLogbookUseCase(inMemoryRepo);


    await ApiServer.run(5000)
}

main();