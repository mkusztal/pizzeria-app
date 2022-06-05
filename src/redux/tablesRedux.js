import shortid from 'shortid';

//selectors
export const getTables = ({ tables }) => tables;
export const getTableById = ({ tables }, tableId) =>
  tables.find((table) => table.id === tableId);

// actions
const createActionName = (actionName) => `app/tables/${actionName}`;
const UPDATE_POST = createActionName('UPDATE_POST');

// action creators
export const updatePost = (payload) => ({ type: UPDATE_POST, payload });

const tablesReducer = (statePart = [], action) => {
  switch (action.type) {
    case UPDATE_POST:
      return [...statePart, { ...action.payload, id: shortid() }];
    default:
      return statePart;
  }
};
export default tablesReducer;
