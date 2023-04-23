/**
 * AJAX add new tasks to task list on save.
 */
const doAddTracker = async (e) => {
    e.preventDefault();
  
    const trackerInput = document.getElementById('formInputWorkoutName');
    const workout = taskInput.value;
    const durationSelect = document.getElementById('formSelectDuration');
    const options = durationSelect.options;
    const selectedIndex = durationSelect.selectedIndex;
    const duration = options[selectedIndex].text;
  
    if (!workout) {
      alert('Please enter a workout name.');
      return;
    }
  
    const res = await addTracker({ workout, duration });
  
    if (res !== null) {
      inst.generateTracker();
    }
    trackerInput.value = '';
  };
  