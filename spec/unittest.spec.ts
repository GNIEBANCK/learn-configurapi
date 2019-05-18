import {assert as assert} from 'chai';
import {Mock, It} from "typemoq";
import { AsyncResource } from 'async_hooks';

describe('Unit Tests',function () {

    let called:boolean = false;
    it('Test Case', async ()=>{
        called = true;
        assert.isTrue(called);
    });

});