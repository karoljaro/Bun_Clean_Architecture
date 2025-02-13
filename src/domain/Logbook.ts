import { randomUUIDv7 } from "bun";

export class Logbook {
    public constructor(
        public readonly name: string,
        public readonly userId: string,
        public readonly id: string = randomUUIDv7()
    ) { }
}
