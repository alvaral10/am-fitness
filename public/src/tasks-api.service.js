const TRACKER_API = `${BASE_API_URL}/tracker`; // http://localhost:3000/api/tasks

class TasksService {
  getTracker = () => _get(TRACKER_API, OPTIONS_WITH_AUTH);

  addTracker = (formData) => _post(TRACKER_API, formData, DEFAULT_OPTIONS_WITH_AUTH);

  deleteTracker = (trackerId) => _delete(`${TRACKER_API}/${trackerId}`, OPTIONS_WITH_AUTH);
}
