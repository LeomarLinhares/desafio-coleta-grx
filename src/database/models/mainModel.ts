import fs from 'fs';

class MainModel {
  public async create (answer): Promise<any> {
    const response = await fs.writeFileSync('./src/database/models/mainModel.ts', answer);
    return response;
  }
}

export default new MainModel();
