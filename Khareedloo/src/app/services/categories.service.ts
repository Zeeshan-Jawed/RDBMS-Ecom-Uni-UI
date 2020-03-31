import { Injectable } from '@angular/core';
import { Categories } from '../models/Categories';
@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  categories: Categories[];
  constructor() {
    this.categories = [
      {
        catname: 'Electronic Devices',
        catimage: 'https://makingmovesincollege.com/wp-content/uploads/2015/08/electronics.jpg'
      },
      {
        catname: 'Electronic Accessories',
        catimage: 'https://www.techadvisor.co.uk/cmsdata/slideshow/3665277/linkad_fb_others_rev_thumb800.jpg'
      },
      {
        catname: 'TV & Home Appliances',
        catimage: 'https://i.gadgets360cdn.com/large/Amazon_Appliances_Sale_1473408424629.jpeg'
      },
      { catname: 'Health & Beauty',
        catimage: 'https://lh5.googleusercontent.com/proxy/FgDpApLMtBpCnrcC-6TKAN-90YJUlO5GtJvoV8mmzH141unkevMEx2RxxdTkcRkEt_dE1x32BcHIB8cFnbc5cywVAYPF5HOp1hYY4IJ74NmlJ3mRdFeG52G1UBPnMycp' }
    ]
  }
}
