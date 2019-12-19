
export class KPListDto {
    id: number;
    title: string;
    createDate: number; // YYYYMMDD

    reviewStatus: KPStatus; // 本知识点(到今天为之)复习情况.

 
    constructor(id: number, title: string, createDate: number) {
        this.id = id;
        this.title = title;
        this.createDate = createDate;
    }
}

export class  KPDetailDto extends KPListDto {
    constructor(id: number, title: string, createDate: number) {
        super(id, title,createDate);
    }
    
    content: string;
    logs: KPLog[];
    comments: KPCommentDto[];
}

export class  KPLog {
    
  reviewDate: number;  // YYYYMMDD
}

export enum KPStatus {Done, PARTIAL_DONE, NO_DONE}

export class PageCondition {
    limit: number;
    pageNumber: number;
    filterContent: string;

    constructor(limit:  number, pageNumber: number) {
        this.limit = limit;
        this.pageNumber = pageNumber;
    }

    skip(): number {
        if (this.pageNumber > 0) {
            return (this.pageNumber - 1) * this.limit;
        }
        return 0;
    }
}

export class KPLogDto {
    id: number;
    reviewDate: number;  // YYYYMMDD
  }

export class KPDto {    
    id: number;
   content: string;
   title: string;
  createDate: number; // YYYYMMDD
  allDone: boolean;
  logs: KPLogDto[];
}

export class KPCommentDto {
    id: number;
    kpId: number;
    content: string;
    createDate: Date;
  }
 
