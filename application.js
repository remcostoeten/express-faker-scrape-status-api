const { faker } = require("@faker-js/faker");

class Application {
  static generateApplications() {
    const discounters = [
      "bol",
      "kaufland",
      "lidl",
      "praxis",
      "hp",
      "samsung",
      "coolblue",
      "kruidvat",
      "plein",
      "ochama",
      "trekpleister",
      "amazon",
      "pepper",
      "tones",
      "darty",
      "fnac",
      "muller",
    ];

    const countries = ["NL", "DE", "UK", "FR", "IT"];
    const states = ["Operational", "Idle", "Connected", "Disconnected"];

    const applications = discounters.flatMap((discounter) => {
      if (
        [
          "bol",
          "coolblue",
          "kruidvat",
          "plein",
          "ochama",
          "trekpleister",
          "tones",
          "darty",
          "fnac",
          "muller",
        ].includes(discounter)
      ) {
        return {
          name: `${discounter}Discounter`,
          state: faker.helpers.arrayElement(states),
        };
      }

      return countries.map((country) => ({
        name: `${discounter}Discounter${country}`,
        state: faker.helpers.arrayElement(states),
      }));
    });

    // Add special case for amazon
    applications.push({
      name: "amazonDiscounter_2",
      state: faker.helpers.arrayElement(states),
    });

    return applications;
  }

  static getByState(state) {
    const apps = this.generateApplications();
    return apps
      .filter((app) => app.state === state)
      .map((app) => ({ name: app.name }));
  }

  static getAllApplications() {
    return this.generateApplications();
  }
}

module.exports = Application;
