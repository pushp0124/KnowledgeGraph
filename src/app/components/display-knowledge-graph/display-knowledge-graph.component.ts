import {Component, Input, OnInit} from '@angular/core';
import {SearchService} from '../../service/search.service';
import { SearchResponse } from '../../models/response.model';
import {isNullOrUndefined} from 'util';
@Component({
  selector: 'app-display-knowledge-graph',
  templateUrl: './display-knowledge-graph.component.html',
  styleUrls: ['./display-knowledge-graph.component.css']
})
export class DisplayKnowledgeGraphComponent implements OnInit {
  responseFromServer: SearchResponse;
  isDataLoaded = false;
  @Input() Text: string;
  isContentUrl = false;
  isName = false;
  isDescription = false;
  isArticleBody = false;
  isUrl = false;
  constructor(private searchService: SearchService) {
  }

  ngOnInit() {
      this.searchService.getData(this.Text).subscribe((response) => {
           console.log(response);
            this.responseFromServer = response;
            if (!(isNullOrUndefined(this.responseFromServer.itemListElement[0]))) {
               this.isDataLoaded  = true;
               if (!(isNullOrUndefined(this.responseFromServer.itemListElement[0].result))) {
                 if (!(isNullOrUndefined(this.responseFromServer.itemListElement[0].result.name))) {
                   this.isName = true;
                 }
                 if (!((isNullOrUndefined(this.responseFromServer.itemListElement[0].result.image)))) {
                   if (!(isNullOrUndefined(this.responseFromServer.itemListElement[0].result.image.contentUrl))) {
                     this.isContentUrl = true;
                   }
                 }
                 if (!(isNullOrUndefined(this.responseFromServer.itemListElement[0].result.detailedDescription))){
                   if (!(isNullOrUndefined(this.responseFromServer.itemListElement[0].result.detailedDescription.articleBody))) {
                     this.isArticleBody = true;
                   }
                   if (!(isNullOrUndefined(this.responseFromServer.itemListElement[0].result.detailedDescription.url))){
                     this.isUrl = true;
                   }
                 }
                 if (!(isNullOrUndefined(this.responseFromServer.itemListElement[0].result.description))) {
                   this.isDescription = true;
                 }
               }
            }
        },
        (error) => {
          console.log('error Occurred');
        },
        () => {
          console.log('completed');
        }
      );
    }

}
