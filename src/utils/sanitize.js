import xss from "xss";

export const sanitizeInput = (value) => xss(value.trim());
