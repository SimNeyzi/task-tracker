function AddTask() {
  return (
    <form className="add-form">
      <div className="form-control">
        <label>Task</label>
        <input type="text" placeHolder="Add Task"></input>
      </div>
      <div className="form-control">
        <label>Day & Time</label>
        <input type="text" placeHolder="Add Day & Time"></input>
      </div>
      <div className="form-control form-control-check">
        <label>Set Reminder</label>
        <input type="checkbox"></input>
      </div>
      <input type="submit" value="Save Task" className="btn btn-block"></input>
    </form>
  );
}

export default AddTask;
