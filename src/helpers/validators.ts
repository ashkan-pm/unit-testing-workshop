function isGmailAddress(email: string) {
  if (/@gmail\.com$/.test(email)) return true;
  return false;
}

export { isGmailAddress };
