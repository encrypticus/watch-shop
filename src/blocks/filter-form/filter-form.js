import React from 'react';
import './filter-form.scss';
import Filter from '#comps/filter';
import { FilterItem } from '#comps/filter/filter';
import Slider from '#comps/slider';
import Checkbox from '#comps/checkbox';
import { sortByColor, sortByMaterial, sortByMechanism, sortByVendor } from '#act/catalog-cards';
import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';

const FilterForm = (props) => {
  const dispatch = useDispatch();
  const ids = useSelector(state => state.catalogCardsReducer.cards.map(card => card.vendor));

  const resetVendors = () => {
    ids.forEach((id) => {
      dispatch(sortByVendor({ id, checked: true }));
    });
  }

  const onResetHandler = () => {
    resetVendors();
  };

  return (
    <form className='filter-form' onReset={onResetHandler}>
      <Filter>
        <FilterItem title='Стоимость'>
          <Slider/>
        </FilterItem>
      </Filter>

      <Filter>
        <FilterItem title='Бренд'>
          <Checkbox id='Techne' actionCreator={sortByVendor} checked={true}>
            Techne
          </Checkbox>
          <Checkbox id='Rado' actionCreator={sortByVendor} checked={true}>
            Rado
          </Checkbox>
          <Checkbox id='Bvlgari' actionCreator={sortByVendor} checked={true}>
            Bvlgari
          </Checkbox>
          <Checkbox id='Tissot' actionCreator={sortByVendor} checked={true}>
            Tissot
          </Checkbox>
          <Checkbox id='Omega' actionCreator={sortByVendor} checked={true}>
            Omega
          </Checkbox>
          <Checkbox id='Montblanc' actionCreator={sortByVendor} checked={true}>
            Montblanc
          </Checkbox>
        </FilterItem>

        <FilterItem title='Механизм'>
          <Checkbox id='quartz' actionCreator={sortByMechanism}>
            Кварц
          </Checkbox>
          <Checkbox id='mechanic' actionCreator={sortByMechanism}>
            Механика
          </Checkbox>
        </FilterItem>

        <FilterItem title='Материал'>
          <Checkbox id='plastic' actionCreator={sortByMaterial}>
            Пластик
          </Checkbox>

          <Checkbox id='metal' actionCreator={sortByMaterial}>
            Металл
          </Checkbox>
        </FilterItem>

        <FilterItem title='Цвет'>
          <Checkbox id='black' actionCreator={sortByColor}>
            Черный
          </Checkbox>
          <Checkbox id='brown' actionCreator={sortByColor}>
            Коричневый
          </Checkbox>
          <Checkbox id='green' actionCreator={sortByColor}>
            Зелёный
          </Checkbox>
          <Checkbox id='red' actionCreator={sortByColor}>
            Красный
          </Checkbox>
        </FilterItem>
      </Filter>
      {/*<button className='filter-form__button' type='reset'>Сбросить фильтр</button>*/}
    </form>
  );
};

export default FilterForm;