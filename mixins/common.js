import get from "lodash/get";

export default {
  data() {
    return {
      isCallingApi: false,
    };
  },
  methods: {
    getFieldError(
      ruleForm,
      field,
      schema,
      vuelidateExternalResults,
      formValue,
      defaultMsg
    ) {
      const fieldInstance = get(ruleForm, field);
      const fieldExternal = get(vuelidateExternalResults, field);
      if (
        !fieldInstance.$error &&
        !(vuelidateExternalResults && fieldExternal && fieldExternal[0])
      ) {
        return {};
      }
      if (vuelidateExternalResults && fieldExternal && fieldExternal[0]) {
        return fieldExternal[0];
      }
      for (const [i] of schema.entries()) {
        let validation = schema[i];
        if (
          validation?.regexInvalid &&
          validation?.regexInvalid.test(formValue[field])
        ) {
          return validation;
        }
        if (fieldInstance[validation?.key] === false) {
          return validation;
        }
      }
      return { msg: defaultMsg };
    },
  },
};
