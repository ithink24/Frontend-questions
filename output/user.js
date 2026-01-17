//Constructor Function
function Person(name, age, guardian, relationship) {
  this.name = name;
  this.age = age;
  this.guardian = guardian;
  this.relationship = relationship;
}

// Visibility check with error handling
Person.prototype.isNameVisible = function () {
  if (typeof this.name !== "string") {
    console.error("Invalid name");
    return false;
  }
  return Boolean(this.name.trim());
};

Person.prototype.isAgeVisible = function () {
  if (typeof this.age !== "number") {
    console.error("Invalid age");
    return false;
  }
  return this.age >= 18;
};

Person.prototype.isGuardianVisible = function () {
  if (typeof this.guardian !== "string") {
    console.warn("Guardian should be a string");
    return false;
  }
  //   return !!this.guardian.trim();
  return this.guardian.trim();
};

Person.prototype.isRelationshipVisible = function () {
  if (typeof this.relationship !== "string") {
    console.warn("Relationship should be a string");
    return false;
  }
  return !!this.relationship.trim();
};

// Greet method
Person.prototype.greet = function () {
  return `Hello, ${this.name || "User"}`;
};

// Sample usage
const person = new Person("Alice", 15, " ", "Sister");

console.log(person.greet()); // Hello, Alice

try {
  if (person.isNameVisible()) {
    console.log("Name:", person.name);
  }

  if (person.isAgeVisible()) {
    console.log("Age:", person.age);
  } else {
    console.log("Age is hidden because person is under 18 or invalid.");
  }

  if (person.isGuardianVisible()) {
    console.log("Guardian:", person.guardian);
  }

  if (person.isRelationshipVisible()) {
    console.log("Relationship:", person.relationship);
  }
} catch (err) {
  console.error(
    "An error occurred while rendering person details:",
    err.message
  );
}
