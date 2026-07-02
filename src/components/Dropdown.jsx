function Dropdown(props) {
  return (
    <div className="flex-1 min-w-[180px]">
      <label className="block mb-2 text-sm font-medium text-gray-300 tracking-wide">
        {props.icon && <span className="mr-2">{props.icon}</span>}
        {props.label}
      </label>

      <div className="relative">
        <select 
          value={props.value || ""} 
          onChange={props.onChange}
          className="w-full appearance-none bg-slate-800/80 backdrop-blur-sm border border-slate-600/50 rounded-xl px-4 py-3.5 text-white cursor-pointer transition-all duration-300 hover:border-blue-500/50 hover:bg-slate-700/80 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500"
        >
          <option value="">Select {props.label}</option>
          {(props.options || []).map((item, index) => (
            <option key={index} value={item}>{item}</option>
          ))}
        </select>

        {/* Custom Chevron Arrow */}
        <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Dropdown;