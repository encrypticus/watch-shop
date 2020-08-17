import React from 'react';
import './filter-form.scss';
import Filter from '#comps/filter';
import { FilterItem } from '#comps/filter';
import Slider from '#comps/slider';
import Checkbox from '#comps/checkbox';
import { sortByColor, sortByMaterial, sortByMechanism, sortByVendor, sortByPrice } from '#act/catalog-cards';
import { useDispatch, useSelector } from 'react-redux';

const FilterForm = (props) => {
  const dispatch = useDispatch();
  const checkboxes = useSelector(state => state.catalogCardsReducer.checkboxes);

  const {
    techne,
    rado,
    bvlgari,
    tissot,
    omega,
    montblanc,
    quartz,
    mechanic,
    metal,
    plastic,
    black,
    brown,
    green,
    red
  } = checkboxes;

  const getIds = (key) => {
    return useSelector(state => state.catalogCardsReducer.cards.map(card => card[key]));
  };

  const vendorIds = getIds('vendor');
  const colorIds = getIds('color');
  const mechanismIds = getIds('mechanism');
  const materialIds = getIds('material');

  const onResetHandler = (event) => {
    event.preventDefault();

    const actions = [
      { ids: vendorIds, actionCreator: sortByVendor },
      { ids: colorIds, actionCreator: sortByColor },
      { ids: mechanismIds, actionCreator: sortByMechanism },
      { ids: materialIds, actionCreator: sortByMaterial }
    ];

    actions.forEach((action) => {
      const { ids, actionCreator } = action;

      ids.forEach((id) => {
        dispatch(actionCreator({ id, checked: true }));
      });
    });

    dispatch(sortByPrice({ min: 10000, max: 100000 }));

    // vendorIds.forEach((id) => {
    //   dispatch(sortByVendor({ id, checked: true }));
    // });
    //
    // colorIds.forEach((id) => {
    //   dispatch(sortByColor({ id, checked: true }));
    // });
    //
    // mechanismIds.forEach((id) => {
    //   dispatch(sortByMechanism({ id, checked: true }));
    // });
    //
    // materialIds.forEach((id) => {
    //   dispatch(sortByMaterial({ id, checked: true }));
    // });
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
          <Checkbox id='Techne' actionCreator={sortByVendor} checked={techne}>
            Techne
          </Checkbox>
          <Checkbox id='Rado' actionCreator={sortByVendor} checked={rado}>
            Rado
          </Checkbox>
          <Checkbox id='Bvlgari' actionCreator={sortByVendor} checked={bvlgari}>
            Bvlgari
          </Checkbox>
          <Checkbox id='Tissot' actionCreator={sortByVendor} checked={tissot}>
            Tissot
          </Checkbox>
          <Checkbox id='Omega' actionCreator={sortByVendor} checked={omega}>
            Omega
          </Checkbox>
          <Checkbox id='Montblanc' actionCreator={sortByVendor} checked={montblanc}>
            Montblanc
          </Checkbox>
        </FilterItem>

        <FilterItem title='Механизм'>
          <Checkbox id='quartz' actionCreator={sortByMechanism} checked={quartz}>
            Кварц
          </Checkbox>
          <Checkbox id='mechanic' actionCreator={sortByMechanism} checked={mechanic}>
            Механика
          </Checkbox>
        </FilterItem>

        <FilterItem title='Материал'>
          <Checkbox id='plastic' actionCreator={sortByMaterial} checked={plastic}>
            Пластик
          </Checkbox>

          <Checkbox id='metal' actionCreator={sortByMaterial} checked={metal}>
            Металл
          </Checkbox>
        </FilterItem>

        <FilterItem title='Цвет'>
          <Checkbox id='black' actionCreator={sortByColor} checked={black}>
            Черный
          </Checkbox>
          <Checkbox id='brown' actionCreator={sortByColor} checked={brown}>
            Коричневый
          </Checkbox>
          <Checkbox id='green' actionCreator={sortByColor} checked={green}>
            Зелёный
          </Checkbox>
          <Checkbox id='red' actionCreator={sortByColor} checked={red}>
            Красный
          </Checkbox>
        </FilterItem>
      </Filter>
      <button className='filter-form__button' type='reset' onClick={onResetHandler}>Сбросить фильтр</button>
    </form>
  );
};

export default FilterForm;