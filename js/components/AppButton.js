// AppButton.js
export default {
  template: `
        <button 
        :class=
        "{'border rounded px-5 py-2 disabled:cursor-not-allowed' : true,
        'bg-gray-100 hover:bg-gray-200 border-gray-400': variant === 'default',
        'bg-indigo-600 hover:bg-indigo-700 border-indigo-800 text-white': variant === 'primary',
        'bg-emerald-600 hover:bg-emerald-700 border-emerald-800 text-white' : variant === 'success',
        'bg-rose-600 hover:bg-rose-700 border-rose-800 text-white' : variant === 'danger',
        'is-loading': processing === true
        }" 
        :disabled="processing"
        >
            <slot />
            </button>
        `,
  data() {
    return {};
  },
  props: {
    variant: {
      type: String,
      default: "default",
    },
    processing: {
      type: Boolean,
      default: false,
    },
  },
};
