import { expect, it } from "vitest";

it("should match an object while ignoring dynamic properties", () => {
    const response = { name: "John", age: 30, timestamp: Date.now() };

    // Using expect.any(Number) to ignore dynamic timestamp
    expect(response).toMatchObject({
        name: "John",
        age: expect.any(Number),
    });
});

it("should match specific properties in an object", () => {
    const user = { id: "123", name: "Alice", role: "admin", active: true };

    // Using expect.objectContaining to check for only the role
    expect(user).toEqual(expect.objectContaining({ role: "admin" }));
});

it("should match an array regardless of order", () => {
    const tags = ["React", "Vitest", "Testing"];

    // Using expect.arrayContaining to check if array includes specific values
    expect(tags).toEqual(expect.arrayContaining(["React", "Vitest"]));
});

it("should validate types instead of exact values", () => {
    const user = { id: "xyz123", name: "Bob", createdAt: new Date() };

    // Using expect.any(String) for ID and expect.any(Date) for timestamp
    expect(user).toMatchObject({
        id: expect.any(String),
        createdAt: expect.any(Date),
    });
});