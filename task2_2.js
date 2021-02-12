function sorting() {
  const data = {
    data: [
      { name: "John", email: "john2@mail.com" },
      { name: "John", email: "john1@mail.com" },
      { name: "Jane", email: "jane@mail.com" },
    ],
  };
  const settings = {
    condition: { include: [{ name: "John" }], sort_by: ["email"] },
  };

  let result = data.data;
  const conditions = settings.condition;

  for (key of Object.keys(conditions)) {
    switch (key) {
      case "include":
        for (field of Object.keys(conditions[key][0])) {
          result = result.filter(
            (el) => el[field] === conditions[key][0][field]
          );
        }
        break;
      case "sort_by":
        const sortField = conditions[key][0];
        result = result.sort((a, b) => (a[sortField] > b[sortField] ? 1 : -1));
        break;
    }
  }
  console.log("result ", result);

  // const result = data.data
  //   .filter((el) => el[field] === settings.condition.include[0][field])
  // .sort((a, b) => {
  //   return a[sortField] > b[sortField] ? 1 : -1;
  // });
  // console.log("result ", result);
}

function filtering(array) {}

sorting();
