"use client";
import React, { useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { Loader2, Plus } from "lucide-react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  diseaseFormDefaults,
  DiseaseFormSchema,
  diseaseFormSchema,
} from "@/types/schema";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { toast } from "sonner";
import { useDiseaseTableStore } from "@/stores/table.store";
import { useModalStore } from "@/stores/modal.store";

const DiseaseModal = () => {
  const { setIsDataRefetch } = useDiseaseTableStore();
  const {
    isOpen,
    setIsOpen,
    title,
    setTitle,
    isLoading,
    setIsLoading,
    id,
    disease,
    en,
    ta,
    sh,
  } = useModalStore();

  async function addDisease(values: DiseaseFormSchema) {
    setIsLoading(true);
    try {
      const response = await fetch("api/add-solution", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(values),
      });
      const data = await response.json();

      if (data?.success) {
        setIsOpen(false);
        setIsDataRefetch();
        toast.success("Success", {
          description: "Solution has been created",
        });
      }
    } catch (error: any) {
      console.log("Error while add solution", error);
    } finally {
      setIsLoading(false);
    }
  }

  async function updateDisease(values: DiseaseFormSchema) {
    setIsLoading(true);
    try {
      const response = await fetch("api/update-solution", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(values),
      });
      const data = await response.json();

      if (data?.success) {
        setIsOpen(false);
        setIsDataRefetch();
        toast.success("Success", {
          description: "Solution has been updated",
        });
      }
    } catch (error: any) {
      console.log("Error while update solution", error);
    } finally {
      setIsLoading(false);
    }
  }

  async function onSubmit(values: DiseaseFormSchema) {
    if (title == "add") {
      addDisease(values);
    } else {
      updateDisease(values);
    }
  }

  const form = useForm<z.infer<typeof diseaseFormSchema>>({
    resolver: zodResolver(diseaseFormSchema),
    defaultValues: diseaseFormDefaults,
  });

  // value set
  const setFormValues = () => {
    form.setValue("id", id?.toString());
    form.setValue("disease", disease);
    form.setValue("en", en);
    form.setValue("ta", ta);
    form.setValue("sh", sh);
  };

  useEffect(() => {
    if (title != "add") {
      setFormValues();
    }
  }, [title, id, disease, en, ta, sh, isOpen]);

  // form fields values reset
  useEffect(() => {
    if (!isOpen) {
      form.reset();
    }
  }, [isOpen]);

  return (
    <div>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger onClick={() => setTitle("add")}>
          <div className=" font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground rounded-md px-3 text-xs h-9 flex justify-center items-center gap-1">
            <span>
              <Plus size={18} />
            </span>
            <span>Add</span>
          </div>
        </DialogTrigger>
        <DialogContent className="space-y-4">
          <DialogHeader>
            <DialogTitle className="font-normal capitalize">
              {title} Disease and Solution
            </DialogTitle>
            <DialogDescription>Sloutions</DialogDescription>
          </DialogHeader>
          <div>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4 text-white"
              >
                <FormField
                  control={form.control}
                  name="disease"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Disease</FormLabel>
                      <FormControl>
                        <Input placeholder="Disease" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="en"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Solution (English)</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Solution in english"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="ta"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Solution (Tamil)</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Solution in tamil" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="sh"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Solution (Sinhala)</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Solution in sinhala"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {title != "" && (
                  <Button
                    type="submit"
                    className="w-full flex justify-center items-center gap-2"
                    disabled={isLoading}
                  >
                    {isLoading && (
                      <span>
                        <Loader2 size={20} className="animate-spin" />
                      </span>
                    )}
                    <span>
                      {title == "add" ? "Submit" : title == "edit" && "Update"}
                    </span>
                  </Button>
                )}
              </form>
            </Form>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default DiseaseModal;
