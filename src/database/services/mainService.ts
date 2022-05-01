import MainModel from '../models/mainModel';

class MainService {
  public async create (answer): Promise<MainModel> {
    const response = await MainModel.create(answer);
    return response;
  }
}
