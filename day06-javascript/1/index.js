function is_array(inp) {
  if (Array.isArray(inp)) {
    return true;
  }
  return false;
}

console.log(is_array([1, 2]));
