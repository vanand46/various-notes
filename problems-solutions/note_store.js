class NotesStore {
  static validStates = ["completed", "active", "others"];
  constructor() {
    this.notes = [];
  }

  // Add new note to notes
  addNote(state, name) {
    if (!name.trim()) {
      throw new Error("Name can not be empty");
    }
    if (!this.checkValidState(state)) {
      throw new Error(`Invalid state ${state}`);
    }
    this.notes.push({
      name,
      state,
    });
  }

  // Get the list of note name by comparing the given state
  getNotes(state) {
    if (!this.checkValidState(state)) {
      throw new Error(`Invalid state ${state}`);
    }
    return this.notes.reduce((acc, note) => {
      if (note.state === state) {
        acc.push(note.name);
      }
    }, []);
  }

  // To check whether the given state is available in predefined state list
  checkValidState(state) {
    return NotesStore.validStates.includes(state);
  }
}
const store = new NotesStore();
store.addNote("active ", "DrinkTea");
store.addNote("active ", "DrinkCoffee");
store.addNote("completed ", "Study");
console.log(store.getNotes("active"));
