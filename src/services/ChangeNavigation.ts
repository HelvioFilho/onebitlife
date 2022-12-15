import db from "./database";

interface ShowProps {
  showHome: string;
  appStartData: string;
}

db.transaction((tx) => {
  tx.executeSql(
    "CREATE TABLE IF NOT EXISTS change_navigation (id INTEGER PRIMARY KEY AUTOINCREMENT, showHome TEXT, appStartData TEXT);",
    [],
    (_, error) => {
      console.log(error)
    }
  );
});

function setShowHome(obj: ShowProps) {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "INSERT INTO change_navigation (showHome, appStartData) values (?,?);",
        [obj.showHome, obj.appStartData],
        (_, { rowsAffected, insertId }) => { 
          if(rowsAffected > 0){
            resolve(insertId);
          }
        },
        (_, error) => {
          reject(error);
          return true;
        }
      );
    });
  });
}

export default {
  setShowHome
}