import fs from 'fs';

class MainModel {
  public async read (): Promise<Buffer> {
    const response = await fs.readFileSync(`${__dirname}/../data.json`);
    return response;
  }

  public async create (answer: string): Promise<Buffer> {
    await fs.writeFileSync(`${__dirname}/../data.json`, answer);
    const response = await fs.readFileSync(`${__dirname}/../data.json`);
    return response;
  }
}

export default new MainModel();
