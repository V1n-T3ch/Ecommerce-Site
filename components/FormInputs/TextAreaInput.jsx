export default function TextAreaInput({
    label,
    name,
    register,
    errors,
    isRequired = true,
    className = "sm:col-span-2",
  }) {
    return (
      <div className={className}>
        <label htmlFor={name} className="block text-sm font-medium leading-6 text-gray-900 dark:text-slate-50 mb-2">
          {label}
        </label>
        <div className="mt-2">
          <textarea
            {...register(`${name}`, {required: isRequired})}
            name={name}
            id={name}
            rows={4}
            className="block w-full rounded-md border-0 py-3 to-gray-900 shadow-sm ring-1 ring-inset text-slate-900
          ring-gray-300 placeholder:to-gray-400 focus:ring- focus:ring-inset focus:ring-green-900 dark:focus:ring-slate-500 sm:text-sm sm:leading-6 dark:bg-transparent dark:text-slate-100" 
          defaultValue={""} placeholder={`Type the ${label.toLowerCase()}`} />
            {errors[`${name}`] &&(
              <span className="text-sm text-red-600">{label} is Required</span>
            )}
        </div>
      </div>
    )
  }
  