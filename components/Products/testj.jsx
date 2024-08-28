import React from 'react';
import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { useForm } from "react-hook-form";
import { Checkbox } from "@/components/ui/checkbox";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { FaFilter } from 'react-icons/fa';

const items = [
    { id: "Design & UX/UI", label: "Design & UX/UI" },
    { id: "Mobile Development", label: "Mobile Development" },
    { id: "Data Science", label: "Data Science" },
    { id: "Web Development", label: "Web Development" },
    { id: "Photography & Video", label: "Photography & Video" },
    { id: "Programming & Tech", label: "Programming & Tech" },
    { id: "Business & Entrepreneurship", label: "Business & Entrepreneurship" },
    { id: "Digital Marketing", label: "Digital Marketing" },
];

export const Filtration = ({ products, setProducts }) => {

    const form = useForm({
        defaultValues: { items: [] },
    });

    function onSubmit(data) {
        const selectedCategories = data.items;
        if (selectedCategories.length > 0) {
            const filteredProducts = products.filter(product =>
                selectedCategories.includes(product.attributes.Category)
            );
            setProducts(filteredProducts);
        } else {
            setProducts(products); // If no categories are selected, reset to original products
        }
    }

    return (
        <Sheet key="left">
            <SheetTrigger asChild>
                <Button variant="outline">
                    <FaFilter className='mr-2' /> Filtration
                </Button>
            </SheetTrigger>
            <SheetContent side="left">
                <SheetHeader>
                    <SheetTitle>Filter</SheetTitle>
                    <SheetDescription>
                        Select categories to filter the products.
                    </SheetDescription>
                </SheetHeader>
                <div className='pt-5'>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                            <FormField
                                control={form.control}
                                name="items"
                                render={() => (
                                    <FormItem>
                                        {items.map((item) => (
                                            <FormField
                                                key={item.id}
                                                control={form.control}
                                                name="items"
                                                render={({ field }) => {
                                                    return (
                                                        <FormItem
                                                            key={item.id}
                                                            className="flex flex-row items-start space-x-3 space-y-0"
                                                        >
                                                            <FormControl>
                                                                <Checkbox
                                                                    checked={field.value?.includes(item.id)}
                                                                    onCheckedChange={(checked) => {
                                                                        return checked
                                                                            ? field.onChange([...field.value, item.id])
                                                                            : field.onChange(
                                                                                field.value?.filter(
                                                                                    (value) => value !== item.id
                                                                                )
                                                                            );
                                                                    }}
                                                                />
                                                            </FormControl>
                                                            <FormLabel className="text-sm font-normal">
                                                                {item.label}
                                                            </FormLabel>
                                                        </FormItem>
                                                    )
                                                }}
                                            />
                                        ))}
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <SheetFooter>
                                <SheetClose asChild>
                                    <Button type="submit">Save changes</Button>
                                </SheetClose>
                            </SheetFooter>
                        </form>
                    </Form>
                </div>
            </SheetContent>
        </Sheet>
    )
}
