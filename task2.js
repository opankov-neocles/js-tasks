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

  field = "name";
  sortField = settings.condition.sort_by[0];

  const result = data.data
    .filter((el) => el[field] === settings.condition.include[0][field])
    .sort((a, b) => {
      return a[sortField] > b[sortField] ? 1 : -1;
    });
  console.log("result ", result);
}

function filtering(array) {}

sorting();
