import React from "react";
import { classNames } from "./../../../../utils/classNames";

export default function InputField({
  required,
  name,
  type,
  label,
  value,
  className,
  errors,
  register,
  pattern,
  minLength,
  maxLength,
}) {
  return (
    <div className={className}>
      <div className="form-group">
        <label className="col-form-label">
          {label}
          {required && <span className="text-danger">*</span>}
        </label>
        <input
          {...register(name, {
            required,
            pattern,
            minLength,
            maxLength,
          })}
          className={classNames(
            !errors && "focus:border-green-600",
            errors && "error-class",
            "form-control"
          )}
          name={name}
          defaultValue={value}
          type={type}
        />
      </div>
    </div>
  );
}

export function SelectField({
  required,
  name,
  type,
  label,
  value,
  className,
  errors,
  register,
  pattern,
  selectArray,
  minLength,
  maxLength,
}) {
  return (
    <div className={className}>
      <div className="form-group">
        <label className="col-form-label">
          {label}
          {required && <span className="text-danger">*</span>}
        </label>
        <select
          {...register(name, {
            required,
            pattern,
            minLength,
            maxLength,
          })}
          className={classNames(
            !errors && "focus:border-green-600",
            errors && "error-class",
            "form-control"
          )}
          name={name}
          defaultValue={value}
          type={type}
        >
          {selectArray?.map((_item) => {
            return (
              <option key={_item?.requestId} value={_item?.requestId}>
                {_item?.requestName}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
}
