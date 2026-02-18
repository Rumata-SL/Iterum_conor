export const deepEqual = <T>(obj1: T, obj2: T): boolean => {
    // Сравнение по ссылке (включая примитивы)
    if (obj1 === obj2) {
        return true;
    }

    // Если один из объектов null или undefined, а другой — нет
    if (obj1 == null || obj2 == null) {
        return false;
    }

    // Проверка типов (на случай, если T — union-тип)
    if (typeof obj1 !== typeof obj2) {
        return false;
    }

    // Если оба — примитивы (но не равны, иначе бы вернулось выше)
    if (typeof obj1 !== "object") {
        return false;
    }

    // Обработка массивов
    const isArray1 = Array.isArray(obj1);
    const isArray2 = Array.isArray(obj2);
    if (isArray1 !== isArray2) {
        return false;
    }

    // Для массивов: проверка длины
    if (isArray1 && isArray2 && obj1.length !== obj2.length) {
        return false;
    }

    // Получаем ключи обоих объектов
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    // Сравниваем количество свойств
    if (keys1.length !== keys2.length) {
        return false;
    }

    // Рекурсивно сравниваем каждое свойство
    for (const key of keys1) {
        if (!keys2.includes(key)) {
            return false;
        }
        // TypeScript гарантирует, что obj1[key] и obj2[key] имеют одинаковый тип,
        // так как obj1 и obj2 имеют тип T
        if (!deepEqual(obj1[key as keyof T], obj2[key as keyof T])) {
            return false;
        }
    }

    return true;
};