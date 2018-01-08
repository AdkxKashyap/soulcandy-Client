import { Component, OnInit,Inject } from '@angular/core';
import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';
import { Promotion } from '../shared/promotions';
import { PromotionService } from '../services/promotion.service';
import { Leader } from '../shared/leader';
import {LeaderService} from '../services/leader.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
dish:Dish;
promotion:Promotion;
leader:Leader;
errMess:string;
color="warn"
color1="accent"
  constructor(private dishservice:DishService,private promo:PromotionService,private leaderservice:LeaderService,@Inject('BaseURL') private BaseURL) {}

  ngOnInit() {
    this.dishservice.getFeaturedDish().subscribe(dish=>this.dish=dish, errmess => this.errMess = <any>errmess);
    this.promo.getFeaturedPromotion().subscribe(promotion=>this.promotion=promotion);//Use observable
    this.leaderservice.getFeaturedLeader().then(leader=>this.leader=leader);
    
  }

}