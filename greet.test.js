<script>

describe('test greet()', function () {
    it('should be called', function (){
        expect(greet('Elizabeth')).toBeCalled();
    })
});

var name = greet('Hello ' + name + ' !');

</script>