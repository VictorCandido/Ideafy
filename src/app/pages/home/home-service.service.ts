import { Injectable } from '@angular/core';
import { RegisterClass } from 'src/app/classes/RegisterClass';
import { IRegisters } from 'src/app/interfaces/IRegisters';

@Injectable({
  providedIn: 'root'
})
export class HomeServiceService {

  registers: RegisterClass = new RegisterClass();

  constructor() { 
    this.registers.setRegisters([
      { 
        title: 'Primeira ideia',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        logo: 'https://api.adorable.io/avatars/285/abott@adorable.png'
       },{ 
        title: 'Segunda ideia',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet est placerat in egestas erat. Condimentum vitae sapien pellentesque habitant morbi. Volutpat est velit egestas dui. Velit sed ullamcorper morbi tincidunt. Risus nullam eget felis eget nunc lobortis mattis. Imperdiet nulla malesuada pellentesque elit eget gravida cum sociis. Senectus et netus et malesuada fames ac turpis. Id porta nibh venenatis cras sed felis eget. Ut tortor pretium viverra suspendisse potenti nullam.',
        logo: 'https://api.adorable.io/avatars/285/a.pngCopy'
       },{ 
        title: 'Terceira ideia',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisi porta lorem mollis aliquam ut porttitor leo a. Elit duis tristique sollicitudin nibh. At erat pellentesque adipiscing commodo. At tempor commodo ullamcorper a lacus vestibulum sed arcu. Enim nulla aliquet porttitor lacus luctus accumsan tortor posuere ac. Facilisi cras fermentum odio eu. Ipsum dolor sit amet consectetur. Neque convallis a cras semper auctor neque vitae tempus. Auctor elit sed vulputate mi sit amet mauris. Ac tortor dignissim convallis aenean. Id faucibus nisl tincidunt eget nullam non. Lacus laoreet non curabitur gravida arcu. Ipsum dolor sit amet consectetur adipiscing. Sollicitudin tempor id eu nisl nunc mi. Dui accumsan sit amet nulla facilisi morbi tempus. Posuere morbi leo urna molestie at elementum eu facilisis sed. A diam maecenas sed enim ut sem viverra. Massa enim nec dui nunc mattis enim ut tellus. Ut etiam sit amet nisl purus in.',
        logo: 'https://api.adorable.io/avatars/285/aa.png'
       },{ 
        title: 'Quarta ideia',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Urna nunc id cursus metus aliquam eleifend mi in nulla. Pharetra sit amet aliquam id diam. Vitae elementum curabitur vitae nunc sed velit dignissim sodales ut. At elementum eu facilisis sed odio morbi. Amet luctus venenatis lectus magna fringilla. Lacus viverra vitae congue eu. Ut aliquam purus sit amet luctus. Massa sapien faucibus et molestie ac feugiat sed. Lobortis feugiat vivamus at augue eget arcu dictum. Semper quis lectus nulla at volutpat diam ut venenatis tellus. Nulla facilisi nullam vehicula ipsum a arcu cursus. Amet nisl suscipit adipiscing bibendum est. Nisl condimentum id venenatis a. Vel fringilla est ullamcorper eget. Pellentesque massa placerat duis ultricies. Magna etiam tempor orci eu lobortis elementum nibh. Dignissim sodales ut eu sem integer vitae justo eget magna. Sed elementum tempus egestas sed sed risus pretium. Sit amet nisl purus in.',
        logo: 'https://api.adorable.io/avatars/285/victor.png'
       },{ 
        title: 'Quinta ideia',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Euismod elementum nisi quis eleifend quam adipiscing. Vivamus at augue eget arcu dictum varius duis at consectetur. Amet nulla facilisi morbi tempus iaculis urna id volutpat lacus. Est ultricies integer quis auctor elit sed. Vel risus commodo viverra maecenas accumsan lacus. Non enim praesent elementum facilisis leo vel. Fusce id velit ut tortor pretium viverra suspendisse potenti nullam. Vehicula ipsum a arcu cursus vitae congue mauris. Mauris cursus mattis molestie a iaculis at erat. Nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper. Pulvinar mattis nunc sed blandit libero volutpat sed cras. Risus nullam eget felis eget nunc lobortis. Enim eu turpis egestas pretium. Erat velit scelerisque in dictum non.',
        logo: 'https://api.adorable.io/avatars/285/salve.png'
       },
    ]);
  }

  public getRegisters(): Array<IRegisters> {
    return this.registers.getRegisters();
  }
}
