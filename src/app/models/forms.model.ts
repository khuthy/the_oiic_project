export class FormField<T> {
  value: T|undefined;
  key: string;
  label: string;
  required: boolean;
  validator: string;
  order: number;
  controlType: string;
  type: string;
  multiple: boolean;
  groupID: number;
  upload: boolean;
  options: { key: string; value: string }[];
  placeholder: string;
  children: FormField<string>[];
 
  constructor(
    options: {
      value?: T;
      key?: string;
      label?: string;
      required?: boolean;
      validator?: string;
      order?: number;
      controlType?: string;
      type?: string;
      groupID?: number;
      multiple?: boolean;
      upload?: boolean;
      options?: { key: string; value: string }[];
      placeholder?: string;
      children?: FormField<string>[];
    } = {}
  ) {
    this.value = options.value;
    this.key = options.key || "";
    this.label = options.label || "";
    this.required = !!options.required;
    this.validator = options.validator || "";
    this.multiple = options.multiple || false;
    this.order = options.order === undefined ? 1 : options.order;
    this.controlType = options.controlType || "";
    this.type = options.type || "";
    this.options = options.options || [];
    this.upload = options.upload || false;
    this.children = options.children || [];
    this.placeholder = options.placeholder || "";
  }
}