const en = {
  common: {
    loading: "Loading...",
    table: {
      error: {
        message: "An error has occurred loading the information",
        button: "Retry",
      },
      pagination: {
        labelDisplayedRows: "{{from}}-{{to}} of {{count}}",
        labelRowsPerPage: "Per page:",
      },
    },
  },
  entities: {
    busStop: {
      fields: {
        type: "Type",
        code: "Code",
        name: "Name",
        coordinates: "Coordinates",
        state: "State",
        smart: "Smart",
      },
      tooltips: {
        smart: "It is a smart Bus Stop",
      },
      enumerators: {
        type: {
          CITY: "City",
          METROPOLITAN: "Metropolitan",
        },
        state: {
          ACTIVE: "Active",
          INACTIVE: "Inactive",
        },
      },
    },
  },
};

export default en;
