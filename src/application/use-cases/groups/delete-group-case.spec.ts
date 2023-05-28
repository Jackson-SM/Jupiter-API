import { CreateGroupCase } from "./create-group-case";
import { InMemoryGroupRepository } from "tests/repositories/in-memory-group-repository";
import { makeGroup } from "tests/factories/makeGroup";
import { Group } from "~/domain/entities/Group/Group";
import { DeleteGroupCase } from "./delete-group-case";

describe("Delte Group Case", () => {
  let inMemoryGroupRepository: InMemoryGroupRepository;
  let createGroupCase: CreateGroupCase;
  let groupTesting: Group;
  let deleteGroupCase: DeleteGroupCase;

  beforeEach(async () => {
    inMemoryGroupRepository = new InMemoryGroupRepository();
    createGroupCase = new CreateGroupCase(inMemoryGroupRepository);
    deleteGroupCase = new DeleteGroupCase(inMemoryGroupRepository);
    const { group } = await createGroupCase.execute(makeGroup());
    groupTesting = group;
  });

  it("should to delete a new task", async () => {
    await deleteGroupCase.execute({ id: groupTesting.id });

    expect(groupTesting).toBeInstanceOf(Group);
    expect(inMemoryGroupRepository.groups).toHaveLength(0);
  });
});
