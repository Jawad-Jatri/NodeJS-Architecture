const {faker} = require('@faker-js/faker');

module.exports.makeFakeUser = (overrides) => {
  const user = {
    name: faker.name.findName(),
    phone: faker.phone.phoneNumber(),
    password: faker.internet.password(),
    email: faker.internet.email(),
    designation: faker.name.jobTitle(),
    address: faker.address.country(),
    nid: faker.datatype.uuid(),
    transactionType: "CASH",
    balance: faker.datatype.number(),
    commission: faker.datatype.number(),
    commissionType: "CASH",
    userType: "admin",
    discountAccess: true,
    roles: "1,2,3,4,5,6",
    status: true,
    seatPlanEditAccess: false,
    counterReportAccess: "",
  }

  return {
    ...user,
    ...overrides
  }
}
