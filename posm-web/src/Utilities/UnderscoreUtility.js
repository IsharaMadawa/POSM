import underscore from "underscore";

function __() {
    // [08.06.2021]: [] or '' is considered to have no value as well. This method can be used to check an empty array / string as well.
    function hasNoValue(value) {
        return underscore.isUndefined(value) || underscore.isNull(value) || underscore.isNaN(value) || (underscore.isString(value) && underscore.isEmpty(value));
    }

    function hasValue(value) {
        return !hasNoValue(value);
    }

    return {
        hasNoValue: hasNoValue,
        hasValue: hasValue
    }
}

export default __();
