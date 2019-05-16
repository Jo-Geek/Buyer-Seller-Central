var categories = "";
$(document).ready(function () {
    $('#lstPrimary').on('click', '.list-group-item', function () {

        categories = $(this).text().trim();
    })

    $('#lstSecondary').on('click', '.list-group-item', function () {
        categories += " > " + $(this).text().trim();
        $(this).closest('.modal').modal('hide');

        $('[data-target="#' + $(this).closest('.modal').attr('id') + '"]').text(categories);
    })

    $('#mSelCategory [data-dismiss=modal]').click(function () {
        $('[data-target="#' + $(this).closest('.modal').attr('id') + '"]').text(categories.trim() == "" ? "Select Category" : categories);
    })
})