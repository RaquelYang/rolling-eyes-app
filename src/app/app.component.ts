import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
// import { HttpClient } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { IonicModule } from '@ionic/angular';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [CommonModule, RouterOutlet, MatButtonModule, IonicModule],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
    title = 'rolling-eyes-app';

    public actionSheetButtons = [
        {
            text: 'Delete',
            role: 'destructive',
            data: {
                action: 'delete',
            },
        },
        {
            text: 'Share',
            data: {
                action: 'share',
            },
        },
        {
            text: 'Cancel',
            role: 'cancel',
            data: {
                action: 'cancel',
            },
        },
    ];

    // constructor(private http: HttpClient) {}

    ngOnInit(): void {
        const a = 123;
        // const multiple = 123;
        const aApplee = 'aaa';
        console.log('a', a);
        console.log('a', aApplee);
    }
    // https://ithelp.ithome.com.tw/articles/10296508
    /**
     * 取得 api
     * @param aaa - 假的
     * @param {Type} [Name] [Description]
     * @param 定義一個參數的類型和描述
      @returns 描述返回值
      @example 定義一個示例用法
      @link 定義鏈接另一個方法、文檔或外部鏈接
      @ignore 表示標記的內容永遠不會出現在文檔中
     */
    // getAPI(aaa: string): void {
    //     console.log('aaa', aaa);
    //     this.http.get('aaa');
    // }
}
