class FieldModel {

    constructor(name, type, component, label, value = null, valueLabel = null, options = null){
    // constructor(name, type,  label){
        this.name = name;
        this.type = type;
        this.component = component;
        this.label = label;
        this.value = value;
        this.valueLabel = valueLabel;
        this.options = options;
    }
};

export default FieldModel;