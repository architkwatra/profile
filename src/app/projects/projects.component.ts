import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  projectsURL = {
    leafWilting: "https://github.com/architkwatra/Leaf-Wilting-Detection-in-Soybean-Plants/blob/master/TransferLearning.ipynb",
    xinu: {
      PA0: "https://github.com/architkwatra/CSC-501-Operating_Systems/tree/master/PA0", 
      PA1: "https://github.com/architkwatra/CSC-501-Operating_Systems/tree/master/PA1", 
      PA2: "https://github.com/architkwatra/CSC-501-Operating_Systems/tree/archit/PA2", 
      PA3: "https://github.com/architkwatra/CSC-501-Operating_Systems/tree/archit/csc501-lab3",
    },
    textSummarization: "https://github.com/architkwatra/NewsArticleSummarixation",
    scrumBot: "https://github.ncsu.edu/akwatra/ScrumBot",
    dxl: "https://www.dxl.com/mens-big-and-tall-store",
    dsw: "https://www.dsw.com/en/us/",
    networking: {
      goBackN: "https://github.com/architkwatra/FTP/tree/main/Go_Back_N", 
      selectiveRepeat: "https://github.com/architkwatra/FTP/tree/main/SelectiveARQ",
      p2p: "https://github.com/architkwatra/peer-to-peer_with_CI"
    },
    sentimentAnalysis: "https://github.com/architkwatra/Sentiment-Analysis"
  };

  ngOnInit(): void {
    
  }

}
