const { Property, Owner, Financial, Feature } = require("../../db");
const { Op } = require("sequelize");

async function getFilteredProperties(financeType, rentalYield, location) {
  try {
    const filterFinancialOptions = {};
    const filterFeatureOptions = {};

    if (financeType) {
      filterFinancialOptions["Investment_type"] = financeType;
    }

    if (rentalYield) {
      const [minRentalYield, maxRentalYield] = rentalYield.split("-");
      filterFinancialOptions["Rental_yield"] = {
        [Op.between]: [minRentalYield, maxRentalYield],
      };
    }

    if (location) {
      filterFeatureOptions["Country"] = location;
    }

    const filteredProperties = await Property.findAll({
      include: [
        {
          model: Financial,
          where: filterFinancialOptions,
        },
        {
          model: Owner,
        },
        {
          model: Feature,
          where: filterFeatureOptions,
        },
      ],
    });

    return filteredProperties;
  } catch (error) {
    console.error(error);
    throw new Error("Error al obtener propiedades filtradas");
  }
}

module.exports = { getFilteredProperties };
