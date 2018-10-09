export default function(state = 0, { type, payload }) {
  switch (type) {
    case 'tab:set':
      return payload;

    default:
      return state;
  }
}
