export function textWithCondition(condition, value, element) {
    $(element).keyup(function(e) {
        if (condition.test(value)) {
            this.value = this.value.replace(condition, '');
        }
    })
}