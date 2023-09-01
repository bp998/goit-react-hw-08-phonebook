export const selectContacts = state => state.contacts.items;
export const selectFilter = state => state.filter;
export const selectError = state => state.contacts.error;
export const selectIsLoading = state => state.contacts.isLoading;

export const selectFilteredContacts = state => {
  const contacts = selectContacts(state);
  const filter = selectFilter(state);
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
};
export const selectSortedFilteredContacts = state => {
  const filteredContacts = selectFilteredContacts(state);
  return filteredContacts.sort((a, b) => a.name.localeCompare(b.name));
};
