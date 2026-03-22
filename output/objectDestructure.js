const newObj = {
    "A": 12,
    "B": 23,
    "C": {
        "P": 23,
        "O": {
                "L": 56
        },
        "Q": [1, 2]
        }
}

// Expected output: 
//         {
//           "A": "12",
//           "B": 23,
//           "C.P": 23,
//           "C.O.L": 56,
//           "C.Q.0": 1,
//           "C.Q.1": 2
//         }

let res={};

function A(obj) {
  Object.entries(obj).map(([key, value]) => {
    if (value && typeof value === "object") {
      Object.entries(value).map(([newKey, newValue]) => {
        const str = `${key}.${newKey}`;
        const newObj = {
          [str]: newValue,
        };
        A(newObj);
      });
    } else {
      res[key] = value;
    }
  });
  return res;
}

console.log(A(newObj), 'rrrr');

 
//------------------------------------------------------------------------------------------------------

const obj = {
  user: {
    profile: {
      name: "Alice",
      age: 30
    },
    scores: [10, 20, 30]
  }
};

// getByPath(obj, "user.profile.name");     // → "Alice"
// getByPath(obj, "user.scores.1");         // → 20

// setByPath(obj, "user.profile.city", "NYC");
// // obj.user.profile.city is now "NYC"

// setByPath(obj, "user.profile.age", 31);
// // obj.user.profile.age is now 31

function getByPath(obj, path) {
  const keys = path.split(".");
  let current = obj;

  for (let i = 0; i < keys.length; i++) {
    if (current == null) return undefined;
    current = current[keys[i]];
  }

  return current;
}

function setByPath(obj, path, value) {
  const keys = path.split(".");
  let current = obj;

  for (let i = 0; i < keys.length - 1; i++) {
    const key = keys[i];

    if (!(key in current)) {
      current[key] = {};
    }

    current = current[key];
  }

  current[keys[keys.length - 1]] = value;
}