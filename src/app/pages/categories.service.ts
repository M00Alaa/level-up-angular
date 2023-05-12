import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  constructor(private http: HttpClient) { }

  getCategories(catName: string): Observable<any> {
    return this.http.get(`http://level.somee.com/api/Category?type=${catName}`)
  }
  getLevels(catName: string): Observable<any> {
    return this.http.get(`http://level.somee.com/api/Level?name=${catName}`)
  }
  getQuestions(catName: string, levelName: string): Observable<any> {
    return this.http.get(`http://level.somee.com/api/TestLevel?catname=${catName}&levname=${levelName}`)
  }
  getResults(catName: string, levelName: string, arr: any[]): Observable<any> {
    return this.http.post(`http://level.somee.com/api/TestLevel?name=${catName}&lev=${levelName}`, arr)
  }

  getTestQuestions(catName: string): Observable<any> {
    return this.http.get(`http://level.somee.com/api/TestExam?name=${catName}`)
  }
  getTestResult(catName: string, arr: any[]): Observable<any> {
    return this.http.post(`http://level.somee.com/api/TestExam?name=${catName}`, arr)
  }

  getResources(catName: string, levelName: string): Observable<any> {
    return this.http.get(`http://level.somee.com/api/book?catname=${catName}&levname=${levelName}`)
  }
}
