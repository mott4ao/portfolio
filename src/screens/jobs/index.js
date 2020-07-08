import React from 'react';
import './index.css'

import { Container } from './styles'

class Jobs extends React.Component {

    componentDidMount(){
        const slider = document.querySelector('.items');
        let isDown = false;
        let startX;
        let scrollLeft;

        slider.addEventListener('mousedown', (e) => {
        isDown = true;
        slider.classList.add('active');
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
        });
        slider.addEventListener('mouseleave', () => {
        isDown = false;
        slider.classList.remove('active');
        });
        slider.addEventListener('mouseup', () => {
        isDown = false;
        slider.classList.remove('active');
        });
        slider.addEventListener('mousemove', (e) => {
        if(!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * .8; //scroll-fast
        slider.scrollLeft = scrollLeft - walk;
        });
    }


      render() {
          return (
        <>
          <Container>
          <div class="grid-container">
            <header class="grid-item header">
                <h2><span role="img" aria-label="briefcase">💼</span> Meus trabalhos <span role="img" aria-label="briefcase">💼</span></h2>    
            </header>
            <main class="grid-item main">
                <div class="items">
                <div class="item item1">job1</div>
                <div class="item item2">job2</div>
                <div class="item item3">job3</div>
                <div class="item item4">job4</div>
                <div class="item item5">job5</div>
                <div class="item item6">job6</div>
                <div class="item item7">job7</div>
                <div class="item item8">job8</div>
                <div class="item item9">job9</div>
                <div class="item item10">job10</div>
                </div>
            </main>
            </div>
          </Container>
        </>
      );
      }
    
  }

export default Jobs;