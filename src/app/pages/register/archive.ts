export class Archive {

  constructor(id: number, data: Date, ip: string, requisicao: string, status: string, userAgent: string) {
    this.id = id;
    this.data = data;
    this.ip = ip;
    this.requisicao = requisicao;
    this.status = status;
    this.userAgent = userAgent;
  }

  id: number;
  data: Date;
  ip: string;
  requisicao: string;
  status: string;
  userAgent: string;

}
